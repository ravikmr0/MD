import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin, Clock, Navigation } from "lucide-react";

interface Store {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeStore, setActiveStore] = useState<Store | null>(null);

  // Mock store data
  const stores: Store[] = [
    {
      id: 1,
      name: "Mayank Dairy - Main Store",
      address: "123 Dairy Lane",
      city: "Milk City",
      state: "MC",
      zipCode: "12345",
      phone: "(555) 123-4567",
      hours: "Mon-Sat: 8AM-8PM, Sun: 9AM-6PM",
      coordinates: {
        lat: 40.7128,
        lng: -74.006,
      },
    },
    {
      id: 2,
      name: "Mayank Dairy - Downtown",
      address: "456 Cheese Street",
      city: "Milk City",
      state: "MC",
      zipCode: "12346",
      phone: "(555) 987-6543",
      hours: "Mon-Fri: 7AM-9PM, Sat-Sun: 8AM-7PM",
      coordinates: {
        lat: 40.7145,
        lng: -74.0083,
      },
    },
    {
      id: 3,
      name: "Mayank Dairy - Westside",
      address: "789 Yogurt Avenue",
      city: "Cream Valley",
      state: "CV",
      zipCode: "54321",
      phone: "(555) 456-7890",
      hours: "Daily: 8AM-9PM",
      coordinates: {
        lat: 40.7193,
        lng: -74.012,
      },
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would filter stores based on the search query
    console.log("Searching for:", searchQuery);
  };

  const handleGetDirections = (store: Store) => {
    // In a real app, this would open directions in a maps service
    window.open(
      `https://maps.google.com/?q=${store.address}, ${store.city}, ${store.state} ${store.zipCode}`,
      "_blank",
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 bg-white">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">
          Find a Mayank Dairy Store
        </h2>
        <p className="text-gray-600">
          Locate our stores to purchase fresh dairy products near you
        </p>
      </div>

      <div className="mb-6">
        <form onSubmit={handleSearch} className="flex gap-2">
          <Input
            type="text"
            placeholder="Enter zip code or city"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </form>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          {stores.map((store) => (
            <Card
              key={store.id}
              className="overflow-hidden hover:shadow-md transition-shadow"
            >
              <CardContent className="p-0">
                <div className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-lg text-blue-700">
                      {store.name}
                    </h3>
                    <div className="flex items-start mt-2">
                      <MapPin className="h-4 w-4 text-gray-500 mr-2 mt-1 shrink-0" />
                      <p className="text-gray-600">
                        {store.address}, {store.city}, {store.state}{" "}
                        {store.zipCode}
                      </p>
                    </div>
                    <div className="flex items-start mt-2">
                      <Clock className="h-4 w-4 text-gray-500 mr-2 mt-1 shrink-0" />
                      <p className="text-gray-600">{store.hours}</p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="shrink-0"
                    onClick={() => handleGetDirections(store)}
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent
          value="map"
          className="h-[500px] rounded-md overflow-hidden"
        >
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <div className="text-center p-6">
              <img
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a?w=800&q=80"
                alt="Map placeholder"
                className="w-full h-[400px] object-cover rounded-md mb-4"
              />
              <p className="text-gray-600">
                Interactive map would be displayed here with store locations
                marked.
              </p>
              <p className="text-gray-500 text-sm mt-2">
                In a production environment, this would integrate with Google
                Maps or a similar service.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8 p-4 bg-blue-50 rounded-md">
        <h3 className="font-semibold text-blue-800 mb-2">
          Can't find a store near you?
        </h3>
        <p className="text-gray-600 mb-4">
          Contact us to inquire about delivery options or to suggest a new store
          location.
        </p>
        <Button variant="outline" className="bg-white">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default StoreLocator;
