import { z } from "zod";
import { CreateBoard } from "./schema";

export type InputType = z.infer<typeof CreateBoard>;
