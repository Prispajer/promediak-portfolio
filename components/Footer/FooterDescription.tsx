import Logo from "@/components/Shared/Logo";

const FooterDescription = () => {
    return (
        <div className="space-y-6">
            <Logo variant="full" />
            <p className="body-text text-sm max-w-xs">
                Profesjonalne usługi filmowe i fotograficzne. Tworzymy
                wyjątkowe wspomnienia z najważniejszych chwil Twojego życia.
            </p>
        </div>
    )
}

export default FooterDescription;