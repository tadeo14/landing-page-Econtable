export default function StaffCard({ name, description, imageSrc }) {
  return (
    <div className="hover-3d card w-60 shadow-xl overflow-hidden bg-white rounded-3xl border border-[#D1D5DB]">
      <figure className="px-6 pt-6">
        <img
          src={imageSrc}
          alt={name}
          className="rounded-2xl w-full object-cover object-top aspect-[3/4]"
        />
      </figure>
      <div className="card-body items-center text-center px-5 pt-4 pb-6 gap-1">
        <h2 className="card-title text-[#0F172A] font-bold text-xl">{name}</h2>
        <p className="text-[#0F172A]/70 text-sm leading-snug">{description}</p>
      </div>
      <div></div><div></div><div></div><div></div>
      <div></div><div></div><div></div><div></div>
    </div>
  );
}