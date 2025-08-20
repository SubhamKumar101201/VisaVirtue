import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { travelDetailsSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface TravelDetailsStepProps {
  data: any;
  onComplete: (data: any) => void;
  isLoading: boolean;
}

export default function TravelDetailsStep({ data, onComplete, isLoading }: TravelDetailsStepProps) {
  const form = useForm({
    resolver: zodResolver(travelDetailsSchema),
    defaultValues: {
      destinationCountry: data.destinationCountry || "",
      visaType: data.visaType || "",
      departureDate: data.departureDate || "",
      returnDate: data.returnDate || "",
      visitPurpose: data.visitPurpose || "",
      accommodationType: data.accommodationType || "",
      flightConfirmation: data.flightConfirmation || "",
    },
  });

  const handleSubmit = (values: any) => {
    onComplete(values);
  };

  const countries = [
    { value: "US", label: "United States" },
    { value: "UK", label: "United Kingdom" },
    { value: "CA", label: "Canada" },
    { value: "AU", label: "Australia" },
    { value: "DE", label: "Germany" },
    { value: "FR", label: "France" },
    { value: "IT", label: "Italy" },
    { value: "ES", label: "Spain" },
    { value: "JP", label: "Japan" },
    { value: "SG", label: "Singapore" },
  ];

  const visaTypes = [
    { value: "tourist", label: "Tourist/Visitor" },
    { value: "business", label: "Business" },
    { value: "student", label: "Student" },
    { value: "work", label: "Work/Employment" },
    { value: "transit", label: "Transit" },
    { value: "family", label: "Family/Relative" },
  ];

  const accommodationTypes = [
    { value: "hotel", label: "Hotel" },
    { value: "friend", label: "Friend/Family" },
    { value: "rental", label: "Rental Property" },
    { value: "hostel", label: "Hostel" },
    { value: "other", label: "Other" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Travel Information</h3>
        <p className="text-sm text-gray-600">Please provide details about your planned travel.</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="destinationCountry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Country *</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select destination country" />
                      </SelectTrigger>
                      <SelectContent>
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="visaType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Visa Type *</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select visa type" />
                      </SelectTrigger>
                      <SelectContent>
                        {visaTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="departureDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Planned Departure Date *</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="returnDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Planned Return Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="visitPurpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Purpose of Visit</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please describe the purpose of your visit..."
                    className="resize-none"
                    rows={3}
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="accommodationType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Accommodation Type</FormLabel>
                  <FormControl>
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accommodation type" />
                      </SelectTrigger>
                      <SelectContent>
                        {accommodationTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="flightConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Flight Confirmation</FormLabel>
                  <FormControl>
                    <Input placeholder="Confirmation number (optional)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button 
              type="submit" 
              className="bg-primary hover:bg-primary-dark text-white flex items-center space-x-2"
              disabled={isLoading}
            >
              <span>{isLoading ? 'Saving...' : 'Continue'}</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
