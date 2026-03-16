export default function StaffCard({ name, description, imageSrc }) {
  return (
    <div className="card w-72 shadow-xl overflow-hidden bg-[#d4e84a] rounded-3xl">
      <figure className="px-6 pt-6">
        <img
          src={imageSrc}
          alt={name}
          className="rounded-2xl w-full object-cover object-top aspect-[3/4]"
        />
      </figure>
      <div className="card-body items-center text-center px-5 pt-4 pb-6 gap-1">
        <h2 className="card-title text-[#1a2a5e] font-bold text-xl">{name}</h2>
        <p className="text-[#1a2a5e] text-sm leading-snug">{description}</p>
      </div>
    </div>
  );
}