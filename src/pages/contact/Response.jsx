import { cn } from "@/lib/cn";
import PropTypes from "prop-types";

const Response = ({ message, status }) => {
  return (
    <div
      className={cn(
        "mt-4 flex items-start gap-4 rounded-md border p-4",
        status === 200
          ? "border-emerald-700 bg-emerald-50 text-emerald-950"
          : "border-red-700 bg-red-50 text-red-950",
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "lucide flex-shrink-0",
          status === 200
            ? "lucide-mail-check-icon lucide-mail-check"
            : "lucide-mail-x-icon lucide-mail-x",
        )}
      >
        {status === 200 ? (
          <>
            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            <path d="m16 19 2 2 4-4" />
          </>
        ) : (
          <>
            <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            <path d="m17 17 4 4" />
            <path d="m21 17-4 4" />
          </>
        )}
      </svg>
      <p>{message}</p>
    </div>
  );
};

Response.propTypes = {
  message: PropTypes.string,
  status: PropTypes.number,
};

export default Response;
