const FooterCopyright = () => {
    return (
        <div className="mt-16 pt-8 border-t border-border/20 text-center">
            <p className="text-sm text-muted-foreground font-body">
                © {new Date().getFullYear()} ProMediak. Wszystkie prawa zastrzeżone.
            </p>
        </div>
    )
}

export default FooterCopyright;