const FooterCopyright = () => {
  return (
    <div className="border-border/20 mt-16 border-t pt-8 pb-8 text-center">
      <p className="text-muted-foreground font-body cursor-default text-sm">
        © {new Date().getFullYear()} ProMediak. Wszystkie prawa zastrzeżone.
      </p>
    </div>
  );
};

export default FooterCopyright;
