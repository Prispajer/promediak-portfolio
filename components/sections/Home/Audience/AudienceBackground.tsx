const AudienceBackground = () => {
  return (
    <div className="absolute inset-0 bg-transparent">
      <div className="bg-accent/80 absolute top-1/4 left-1/4 h-20 w-40 rounded-full blur-[100px]" />
      <div className="bg-primary/80 absolute right-1/4 bottom-1/4 h-30 w-30 rounded-full blur-[150px]" />
    </div>
  );
};

export default AudienceBackground;
