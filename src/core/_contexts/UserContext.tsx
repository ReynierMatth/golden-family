import {SupabaseUserRepositoryImpl} from "../../data/repository/supabase/SupabaseUserRepositoryImpl";
import React from "react";
import {LocalUserRepositoryImpl} from "../../data/repository/local/LocalUserRepositoryImpl";

export const UserContext = React.createContext<LocalUserRepositoryImpl>(new LocalUserRepositoryImpl())