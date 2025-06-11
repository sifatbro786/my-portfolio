export default function Heading({ children }) {
    return (
        <h1 className="text-3xl sm:text-2xl font-bold text-gray-600 mb-14 self-start">
            {children}
        </h1>
    );
}
