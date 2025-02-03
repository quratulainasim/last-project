import { shipengine } from "@/lib/helper/shipEngine"; // Import ShipEngine client
import { Address, Package } from "@/type"; // Import custom types
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { shipToAddress, packages }: { shipToAddress: Address; packages: Package[] } = await req.json();

    // Validate required fields
    if (!shipToAddress || !packages) {
      return new Response(
        JSON.stringify({
          error: "Missing required fields: shipToAddress and packages",
        }),
        { status: 400 }
      );
    }

    // Define the "ship from" address (e.g., your warehouse or business address)
    const shipFromAddress: Address = {
      name: "Michael Smith",
      phone: "+1 555 987 6543",
      addressLine1: "456 Oak Avenue",
      addressLine2: "Suite 200",
      cityLocality: "Los Angeles",
      stateProvince: "CA",
      postalCode: "90001",
      countryCode: "US",
      addressResidentialIndicator: "no", // Indicates a commercial address
    };

    // Log details for debugging
    console.log("Carrier IDs:", [
      process.env.SHIPENGINE_FIRST_COURIER,
      process.env.SHIPENGINE_SECOND_COURIER,
      process.env.SHIPENGINE_THIRD_COURIER,
      process.env.SHIPENGINE_FOURTH_COURIER,
    ].filter(Boolean));

    const carrierIds = [
      process.env.SHIPENGINE_FIRST_COURIER,
      process.env.SHIPENGINE_SECOND_COURIER,
      process.env.SHIPENGINE_THIRD_COURIER,
      process.env.SHIPENGINE_FOURTH_COURIER,
    ].filter((id): id is string => Boolean(id));

    if (carrierIds.length === 0) {
      return new Response(
        JSON.stringify({ error: "No carrier IDs provided in environment variables" }),
        { status: 400 }
      );
    }

    console.log("Sending request to ShipEngine API...");

    // Fetch shipping rates from ShipEngine
    const shipmentDetails = await shipengine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: shipFromAddress,
        packages: packages,
      },
      rateOptions: {
        carrierIds: carrierIds,
      },
    });

    console.log("Received response from ShipEngine API:", shipmentDetails);

    // Return the response with shipment details
    return new Response(
      JSON.stringify({ shipToAddress, packages, shipmentDetails }),
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching shipping rates:", error.message);
    } else {
      console.error("Error fetching shipping rates:", error);
    }
    return new Response(
      JSON.stringify({ error: "Error fetching shipping rates", details: (error as Error).message }),
      { status: 500 }
    );
  }
}
