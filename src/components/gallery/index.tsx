"use client";

import Image from "next/image";
import { TabGroup, TabList, TabPanels } from "@headlessui/react";

import { Image as ImageType } from "@/types";
import GalleryTab from "./GalleryTab";

interface GalleryProps {
  images: ImageType[];
}

const Gallery = ({ images }: GalleryProps) => {
  return (
    <TabGroup as="div" className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <TabList className="grid grid-cols-4 gap-8">
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>

      <TabPanels className="aspect-square w-full">
        {images.map((image) => (
          <TabPanels key={image.id}>
            <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
              <Image
                fill
                src={image.url}
                alt="image"
                className="object-cover object-center"
              />
            </div>
          </TabPanels>
        ))}
      </TabPanels>
    </TabGroup>
  );
};

export default Gallery;
