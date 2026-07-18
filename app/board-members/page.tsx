import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Board Members",
  description:
    "Meet the board of India Club at Georgia Tech — our officers and how the organization is structured.",
  alternates: { canonical: "/board-members" },
};

export default function BoardMembers() {
    return (
      <div>
        <h1>Board Members</h1>
        <p>Executive Board Members will be listed here, organized by office.</p>
      </div>
    );
  }