import pikachu from "../assets/pikachu.png";

const errorMsg = "Oops, Something went wrong";

export default function ErrorPage() {
    return (
        <div className="grid min-h-screen place-content-center justify-items-center bg-slate-50">
            <img className="size-28" src={pikachu} alt="pikachu" />
            <p className="text-center font-mono text-2xl font-bold">
                {errorMsg}
            </p>
        </div>
    );
}
