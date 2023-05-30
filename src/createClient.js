import {createClient} from "@supabase/supabase-js";

export const supabase=createClient(
    "https://rmrqumceomzrucztmjhb.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtcnF1bWNlb216cnVjenRtamhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODU0NTgwMTMsImV4cCI6MjAwMTAzNDAxM30.Y5nejRZRA0yGUv5LpTZ76Oy6O8NI3A5TFqsRPG4SFeg"
    )