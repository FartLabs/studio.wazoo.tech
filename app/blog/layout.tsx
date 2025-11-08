export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-display prose-headings:font-normal prose-headings:mt-8 prose-headings:mb-4 prose-p:text-foreground prose-p:leading-relaxed prose-a:text-foreground prose-a:underline hover:prose-a:text-muted-foreground prose-strong:text-foreground prose-code:text-foreground prose-pre:bg-muted prose-pre:text-foreground prose-ul:my-6 prose-ol:my-6 prose-li:my-2">
      {children}
    </div>
  );
}
