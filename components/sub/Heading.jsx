export default function Heading({ children }) {
    return (
        <h1 className="text-3xl sm:text-2xl sm:text-center font-bold text-gray-600 sm:mb-7 mb-14 sm:self-center self-start">
            {children}
        </h1>
    );
}
