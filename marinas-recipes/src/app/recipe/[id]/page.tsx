export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-foreground">
        פרטי מתכון {id}
      </h1>
      <p className="text-muted-foreground">
        פרטי המתכון יופיעו כאן...
      </p>
    </div>
  );
}
