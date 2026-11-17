
interface ErrorMessageProps {
    children: React.ReactNode
}

export default function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <p className="bg-[#ffabab] text-[#dc0000] p-0 uppercase text-xs font-bold text-center rounded-lg">{children}</p>
    )
}
