import {SupabaseUserRepositoryImpl} from "../../data/repository/supabase/SupabaseUserRepositoryImpl";
import React from "react";

export const UserContext = React.createContext<SupabaseUserRepositoryImpl>(new SupabaseUserRepositoryImpl())