"use client";

import { useReducer } from "react";
import Card from "./Card";

const venues = [
  {
    name: "The Bloom Pavilion",
    imageUrl: "/img/bloom.jpg",
  },
  {
    name: "Spark Space",
    imageUrl: "/img/sparkspace.jpg",
  },
  {
    name: "The Grand Table",
    imageUrl: "/img/grandtable.jpg",
  },
];

type RatingMap = Map<string, number>;

type Action =
  | { type: "set"; venueName: string; rating: number }
  | { type: "remove"; venueName: string };

function buildInitialRatings(): RatingMap {
  return new Map(venues.map((venue) => [venue.name, 0]));
}

function ratingReducer(state: RatingMap, action: Action): RatingMap {
  const next = new Map(state);

  if (action.type === "set") {
    next.set(action.venueName, action.rating);
    return next;
  }

  next.delete(action.venueName);
  return next;
}

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingReducer, undefined, buildInitialRatings);

  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {venues.map((venue) => (
          <Card
            key={venue.name}
            venueName={venue.name}
            imgSrc={venue.imageUrl}
            onRatingChange={(venueName, value) => {
              dispatch({ type: "set", venueName, rating: value });
            }}
          />
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Venue List with Ratings : {ratings.size}</h2>
        <ul className="mt-2 space-y-1">
          {Array.from(ratings.entries()).map(([venueName, value]) => (
            <li
              key={venueName}
              data-testid={venueName}
              className="w-fit cursor-pointer text-slate-900"
              onClick={() => dispatch({ type: "remove", venueName })}
            >
              {venueName} Rating : {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
