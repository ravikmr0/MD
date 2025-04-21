import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  description?: string;
  category?: string;
  isNew?: boolean;
  onAddToCart?: (id: string) => void;
  onViewDetails?: (id: string) => void;
}

const ProductCard = ({
  id = "1",
  name = "Fresh Milk",
  price = 2.99,
  image = "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80",
  description = "Farm-fresh milk sourced from grass-fed cows. Rich in nutrients and great taste.",
  category = "milk",
  isNew = false,
  onAddToCart = () => {},
  onViewDetails = () => {},
}: ProductCardProps) => {
  return (
    <Card className="w-full max-w-[280px] overflow-hidden transition-all duration-200 hover:shadow-md bg-white">
      <div className="relative h-[180px] w-full overflow-hidden bg-gray-100">
        {isNew && (
          <Badge className="absolute right-2 top-2 z-10" variant="secondary">
            New
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      <CardContent className="p-4">
        <div className="mb-1 flex items-center justify-between">
          <Badge variant="outline" className="text-xs capitalize">
            {category}
          </Badge>
          <span className="font-semibold text-primary">
            ${price.toFixed(2)}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-semibold">{name}</h3>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between gap-2 p-4 pt-0">
        <Button
          variant="outline"
          size="sm"
          className="flex-1"
          onClick={() => onViewDetails(id)}
        >
          <Eye className="mr-1 h-4 w-4" />
          Details
        </Button>

        <Button size="sm" className="flex-1" onClick={() => onAddToCart(id)}>
          <ShoppingCart className="mr-1 h-4 w-4" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
