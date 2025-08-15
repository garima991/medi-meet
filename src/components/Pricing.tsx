"use client";

import React from "react";
import { Card, CardContent } from "./ui/card";
import { PricingTable } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <Card className="glass-dark border-purple-500/20 shadow-2xl bg-gradient-to-br from-purple-950/30 via-indigo-950/20 to-transparent">
      <CardContent className="p-8 md:p-12">
        <PricingTable
          checkoutProps={{
            appearance: {
              variables: {
                colorPrimary: "#8b5cf6",
                colorBackground: "#0f0f23",
                colorInputBackground: "#1a1a2e",
                colorInputText: "#ffffff",
              },
              elements: {
                drawerRoot: {
                  zIndex: 2000,
                },
                formButtonPrimary: {
                  backgroundColor: "#8b5cf6",
                  "&:hover": {
                    backgroundColor: "#7c3aed",
                  },
                },
                card: {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  backdropFilter: "blur(10px)",
                },
                headerTitle: {
                  color: "#ffffff",
                },
                headerSubtitle: {
                  color: "#a1a1aa",
                },
                dividerLine: {
                  backgroundColor: "rgba(139, 92, 246, 0.2)",
                },
                dividerText: {
                  color: "#a1a1aa",
                },
                formFieldLabel: {
                  color: "#ffffff",
                },
                formFieldInput: {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(139, 92, 246, 0.2)",
                  color: "#ffffff",
                  "&:focus": {
                    borderColor: "#8b5cf6",
                  },
                },
                footerActionLink: {
                  color: "#8b5cf6",
                  "&:hover": {
                    color: "#7c3aed",
                  },
                },
                badge: {
                  backgroundColor: "rgba(139, 92, 246, 0.1)",
                  color: "#8b5cf6",
                },
                priceText: {
                  color: "#ffffff",
                },
                priceAmount: {
                  color: "#8b5cf6",
                },
                priceCurrency: {
                  color: "#8b5cf6",
                },
                priceInterval: {
                  color: "#a1a1aa",
                },
                featureText: {
                  color: "#ffffff",
                },
                featureIcon: {
                  color: "#8b5cf6",
                },
              },
            },
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Pricing;