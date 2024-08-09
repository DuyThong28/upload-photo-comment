/* eslint-disable @next/next/no-img-element */
import style from "./gallery.module.css";
import { Card } from "antd";

interface IPhoto {
  publicId: string;
  version: string;
  format: string;
  comment: string;
}

interface IProps {
  photos: IPhoto[];
}

export default function Gallery(props: IProps) {
  return (
    <Card>
      {props.photos.map((photo) => {
        return (
          <Card.Grid className={style["photo-container"]} key={photo.publicId}>
            <p className={style.image}>
              <img
                width={"100%"}
                src={`https://res.cloudinary.com/dchhm36es/v${photo.version}/${photo.publicId}.${photo.format}`}
                alt={""}
              />
            </p>
            <p>{photo.comment}</p>
          </Card.Grid>
        );
      })}
    </Card>
  );
}
