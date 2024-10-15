import React from "react";
import Dialog from "./Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog,
};

export const Default = () => (
  <Dialog title="Sample Dialog" onClose={() => alert("Dialog closed")}>
    <p>This is a sample dialog body content.</p>
  </Dialog>
);
