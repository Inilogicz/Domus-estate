import { ServiceCard } from "@/components/service-card"

export function ServicesGrid() {
  const services = [
    {
      title: "Block Management",
      image: "/block.png",
      href: "#",
    },
    {
      title: "Maintenance",
      image: "/maintenance.png",
      href: "#",
    },
    {
      title: "House Keeping",
      image: "/house-keep.png",
      href: "#",
    },
    {
      title: "Financial Services",
      image: "/financial.png",
      href: "#",
    },
    {
      title: "Insurance",
      image: "/insuarance.png",
      href: "#",
    },
  ]

  return (
    <section className="pb-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4 mx-auto">Our Services</h2>
          <p className="text-lg text-left text-gray-600 max-w-2xl ">
            We're redefining property management with a blend of human touch and cutting-edge AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} image={service.image} href={service.href} />
          ))}
        </div>
      </div>
    </section>
  )
}
