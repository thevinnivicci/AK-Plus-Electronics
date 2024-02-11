import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { client } from "../lib/sanity";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const query = `*[_type == "category"] {
            name,
            "slug": slug.current
        }`;
      const data = await client.fetch(query);
      setCategory(data);
      setLoading(false);
    }
    fetchData();
  }, []); // Add an empty dependency array to useEffect to run it only once

  return (
    <div className="w-full flex items-center justify-center p-[1vw] ">
      <Carousel className="overflow-hidden">
        <CarouselContent>
          {loading ? (
            <p className="animate-pulse text-5xl">{}</p>
          ) : (
            category.map((categoryObject, id) => (
              <Link key={id} href={`/${categoryObject.slug}`}>
                <CarouselItem>
                  <Badge
                    className="px-4 hover:shadow text-nowrap  py-2 uppercase text-sm"
                    variant="secondary"
                  >
                    {categoryObject.name} {/* Accessing the name property */}
                  </Badge>
                </CarouselItem>
              </Link>
            ))
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Category;
