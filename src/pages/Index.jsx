import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section */}
      <section className="mb-8">
        <Card>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[400px]" />
          <CardHeader>
            <CardTitle>Featured Article</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">This is a brief summary of the featured article. It provides an overview of the main points and entices readers to click through to read more.</p>
          </CardContent>
        </Card>
      </section>

      <Separator />

      {/* Top Stories */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Top Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((story) => (
            <Card key={story}>
              <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-full h-[200px]" />
              <CardHeader>
                <CardTitle>Story {story}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This is a brief summary of the story. It provides an overview of the main points and entices readers to click through to read more.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Market Data */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Market Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["S&P 500", "Dow Jones", "NASDAQ"].map((index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{index}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Current Value: 12345.67</p>
                <p>Change: +123.45 (+1.23%)</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Latest News */}
      <section className="my-8">
        <h2 className="text-2xl font-bold mb-4">Latest News</h2>
        <div className="grid grid-cols-1 gap-4">
          {[1, 2, 3, 4, 5].map((news) => (
            <Card key={news}>
              <CardHeader>
                <CardTitle>News {news}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>This is a brief summary of the news article. It provides an overview of the main points and entices readers to click through to read more.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Sidebar */}
      <aside className="my-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Trending Articles</h2>
          <div className="grid grid-cols-1 gap-4">
            {[1, 2, 3].map((article) => (
              <Card key={article}>
                <CardHeader>
                  <CardTitle>Trending Article {article}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>This is a brief summary of the trending article. It provides an overview of the main points and entices readers to click through to read more.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Newsletter Signup</h2>
          <Card>
            <CardContent>
              <form>
                <div className="mb-4">
                  <Input type="email" placeholder="Enter your email" />
                </div>
                <Button type="submit">Sign Up</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </aside>
    </div>
  );
};

export default Index;