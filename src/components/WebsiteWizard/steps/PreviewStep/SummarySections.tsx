import { WizardData } from "../../WebsiteWizard";

interface SummarySectionsProps {
  data: WizardData;
}

export const SummarySections = ({ data }: SummarySectionsProps) => {
  return (
    <div className="space-y-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-bold">Business Information</h3>
        <p>Business Name: {data.businessName}</p>
        <p>Industry: {data.industry}</p>
        <p>Location: {data.location}</p>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-bold">Services</h3>
        <ul className="list-disc list-inside">
          {data.services.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>

      {data.testimonials.length > 0 && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-bold">Testimonials</h3>
          {data.testimonials.map((testimonial, index) => (
            <div key={index} className="mt-2">
              <p>"{testimonial.quote}"</p>
              <p className="text-sm">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      )}

      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-bold">Design Preferences</h3>
        <p>Color Scheme: {data.colorScheme}</p>
        {data.customColors && (
          <div className="flex gap-4 mt-2">
            <div className="flex items-center gap-2">
              <span>Primary:</span>
              <div
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: data.customColors.primary }}
              />
            </div>
            <div className="flex items-center gap-2">
              <span>Accent:</span>
              <div
                className="w-6 h-6 rounded-full border"
                style={{ backgroundColor: data.customColors.accent }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};