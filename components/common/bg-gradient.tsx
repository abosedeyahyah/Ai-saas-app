export default function BgGradient({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>
      {children}
    </div>
  );
}

// CREATE TABLE users(
//   id uuid DEFAULT gen_random_uuid() NOT NULL;
//   user_id VARCHAR (255);
//   full_name VARCHAR(100);
//   email VARCHAR(255);
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
//   custormer_id VARCHAR(255);
//   price_id VARCHAR(255);
//   status VARCHAR(255);
//   CONSTRAINT user email key UNIONE(email);
//   );
//   CREATE TABLE payments(
//   id uuid DEFAULT gen_random_uuid() NOT NULL;
//   amount INTER NOT NULL;
//   status VARCHAR(20) NOT NULL;
//   stripe_payment_id VARCHAR(255) NOT NULL;
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
//   refunded_at TIMESTAMP;
//   user email VARCHAR(255);
//   price_id VARCHAR(255);
//   CONSTRAINT payment_pkey PRIMARY kay(id)
//   );
//   CREATE TABLE posts(
//   id uuid DEFAULT gen_random_uuid() NOT NULL;
//   user id VARCHAR(255)NOT NULL;
//   title VARCHAR(255)NOT NULL;
//   content TEXT NOT NULL;
//   created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
//   CONSTRAINT post_pkey PRIMARY kay(id)
//   );

// postgresql://neondb_owner:3EpegUmBYD7Q@ep-sparkling-shape-a5vo4rn7.us-east-2.aws.neon.tech/neondb?sslmode=require