import React from "react";
import { HydraAdmin } from "@api-platform/admin";
import authProvider from "./authProvider";
import { ENTRYPOINT } from './config/entrypoint';

export default () => (
  <HydraAdmin authProvider={authProvider} entrypoint={ENTRYPOINT} />
);