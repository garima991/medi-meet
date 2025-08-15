import { ArrowLeft, Link } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

const PageHeader = ({
  backlink = "/",
  backlabel = "Back to Home",
}) => {
  return (
    <div>
      <Link href={backlink}>
        <Button
          variant="glassIndigo"
          size="sm"
          className="mb-2 border-emerald-900/30"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          {backlabel}
        </Button>
      </Link>
    </div>
  );
};

export default PageHeader;
