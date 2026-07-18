import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/introspect-hyro")({
  server: {
    handlers: {
      GET: async () => {
        const { getHyroDb } = await import("@/lib/hyro-db.server");
        const db = getHyroDb();
        const { data, error } = await db
          .from("hyro_extension_licenses")
          .select("*")
          .limit(1);
        return new Response(
          JSON.stringify({
            error: error?.message ?? null,
            columns: data && data[0] ? Object.keys(data[0]) : [],
            sample: data?.[0] ?? null,
          }),
          { headers: { "content-type": "application/json" } },
        );
      },
    },
  },
});
