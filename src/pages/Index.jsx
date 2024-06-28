import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleClick = () => {
    toast({
      title: "Hello, World!",
      description: "This is your bare-bones web application.",
    });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Welcome</CardTitle>
          <CardDescription>Your bare-bones web application</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is a simple structure that you can modify and build upon.</p>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleClick}>Click Me</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;