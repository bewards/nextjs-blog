import clsx from "clsx";
import styles from "./alert.module.css";

export default function Alert({ type }) {
  return (
    <>
      <section
        className={clsx(
          {
            [styles.success]: type === "success",
            [styles.error]: type === "error",
          },
          styles.alert
        )}
      >
        <h3>Alert Component</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem voluptates dicta animi eum sint nam ipsa quaerat pariatur. Error, modi.
        </p>
      </section>
    </>
  );
}
