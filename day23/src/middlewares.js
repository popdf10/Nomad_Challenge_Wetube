import multer from "multer";

const upload = multer({ dest: "upload/" });

export const uploadTextFile = upload.single("txtFile");
