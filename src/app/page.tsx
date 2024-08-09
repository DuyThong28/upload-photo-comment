"use client";
import useSWR from "swr";
import Gallery from "./components/gallery";
import styles from "./page.module.css";
import { FormEvent, useRef, useState } from "react";
import { mutate } from "swr";
import { notification } from "antd";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const [api, contextHolder] = notification.useNotification();
  const [imageUploaded, setImageUploaded] = useState<File | null>(null);
  const [commentState, setCommentState] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);
  const { data, error, isLoading } = useSWR("/api/images", fetcher);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      setImageUploaded(file);
    }
  };

  const changeCommentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCommentState(event.target.value);
  };
  const submitData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageUploaded) {
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", imageUploaded);
      formData.append("comment", commentState);
      await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      mutate("/api/images");
      if (formRef.current) {
        formRef.current.reset();
        setImageUploaded(null);
        setCommentState("");
        api.open({
          message: "✅ Upload successfully",
        });
      }
    } catch (error) {
      api.open({
        message: "❌ Upload failed",
      });
      console.error(error);
    }
  };
  return (
    <>
      {contextHolder}
      <main>
        <div className={styles.page}>
          <form onSubmit={submitData} ref={formRef}>
            <h1>UPLOADING IMAGE</h1>
            <br />
            <br />
            <input
              className={styles.input}
              onChange={handleChange}
              accept=".jpg, .png, .gif, .jpeg"
              type="file"
              required
            ></input>
            <br />
            <br />
            <input
              className={styles.input}
              name="comment"
              id="comment"
              type="text"
              placeholder="Add a comment"
              value={commentState}
              required
              onChange={changeCommentHandler}
            ></input>
            <br />
            <br />
            <button className={styles["btn-primary"]} type="submit">
              Upload
            </button>
          </form>
        </div>
        <div>
          {" "}
          {isLoading && <div>Loading...</div>}
          {error && <div>Failed to load</div>}
          {data && <Gallery photos={data} />}
        </div>
      </main>
    </>
  );
}
