import type { MenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";


type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItem = ({ menuItem, addToCart }: Props) => {

  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold flex justify-between">
        <span>₹{(menuItem.price)}</span>
        <span><Button onClick={addToCart} className="bg-orange-500 rounded-lg">Add to Cart</Button></span>
      </CardContent>
    </Card>
  );
};

export default MenuItem;