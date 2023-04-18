import api from "src/config/api";
import { MaterialResponse } from "src/types/Material";

export const getMaterial = () => (
  api.get<MaterialResponse>(`material/api/v1/material/?curso=1&anio=2023&periodo=1&limit=100`)
);