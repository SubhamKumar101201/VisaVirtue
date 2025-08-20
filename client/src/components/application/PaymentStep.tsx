import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, CreditCard, DollarSign } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

interface PaymentStepProps {
  applicationId?: string;
  data: any;
  onComplete: (data: any) => void;
  isLoading: boolean;
}

export default function PaymentStep({ applicationId, data, onComplete, isLoading }: PaymentStepProps) {
  const [paymentMethod, setPaymentMethod] = useState('card');
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      cardNumber: data.cardNumber || "",
      expiryDate: data.expiryDate || "",
      cvv: data.cvv || "",
      cardholderName: data.cardholderName || "",
      paymentMethod: data.paymentMethod || "card",
    },
  });

  const paymentMutation = useMutation({
    mutationFn: async (paymentData: any) => {
      const response = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...paymentData,
          applicationId,
          userId: 'default-user',
        }),
      });
      
      if (!response.ok) throw new Error('Payment processing failed');
      return response.json();
    },
    onSuccess: (result) => {
      toast({
        title: "Payment Processing",
        description: "Your payment is being processed. You'll receive a confirmation shortly.",
      });
      onComplete(result);
    },
    onError: (error: any) => {
      toast({
        title: "Payment Failed",
        description: error.message || "Payment processing failed. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (values: any) => {
    if (!applicationId) {
      toast({
        title: "Error",
        description: "Application ID is required for payment processing.",
        variant: "destructive",
      });
      return;
    }
    paymentMutation.mutate(values);
  };

  const fees = {
    application: 140.00,
    processing: 15.00,
    service: 5.00,
    total: 160.00,
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Payment Information</h3>
        <p className="text-sm text-gray-600">Complete your visa application payment securely</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Payment Form */}
        <div className="lg:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
              
              {/* Payment Method Selection */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Payment Method</Label>
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod}
                  className="space-y-3"
                >
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="ml-3 flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900">Credit/Debit Card</span>
                            <div className="flex space-x-1">
                              <Badge variant="outline" className="px-1 py-0 text-xs">VISA</Badge>
                              <Badge variant="outline" className="px-1 py-0 text-xs">MC</Badge>
                              <Badge variant="outline" className="px-1 py-0 text-xs">AMEX</Badge>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600">Secure payment processing</p>
                        </div>
                        <CreditCard className="h-5 w-5 text-gray-400" />
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 opacity-50">
                    <RadioGroupItem value="paypal" id="paypal" disabled />
                    <Label htmlFor="paypal" className="ml-3 flex-1 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900">PayPal</span>
                            <Badge variant="outline" className="px-1 py-0 text-xs">Soon</Badge>
                          </div>
                          <p className="text-xs text-gray-600">Coming soon</p>
                        </div>
                        <DollarSign className="h-5 w-5 text-gray-400" />
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Card Details */}
              {paymentMethod === 'card' && (
                <div className="space-y-4">
                  <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Card Number</FormLabel>
                        <FormControl>
                          <Input placeholder="1234 5678 9012 3456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="expiryDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Expiry Date</FormLabel>
                          <FormControl>
                            <Input placeholder="MM/YY" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="cvv"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CVV</FormLabel>
                          <FormControl>
                            <Input placeholder="123" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="cardholderName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cardholder Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {/* Security Notice */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="text-primary h-5 w-5 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-700">
                        <strong>Secure Payment:</strong> Your payment information is encrypted and secure. 
                        We use industry-standard SSL encryption to protect your data.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary-dark text-white flex items-center justify-center space-x-2 py-3"
                disabled={paymentMutation.isPending || isLoading}
              >
                <Shield className="h-4 w-4" />
                <span>
                  {paymentMutation.isPending ? 'Processing Payment...' : `Pay Securely - $${fees.total.toFixed(2)}`}
                </span>
              </Button>
            </form>
          </Form>
        </div>

        {/* Payment Summary */}
        <div>
          <Card>
            <CardContent className="p-4">
              <h4 className="font-semibold text-gray-900 mb-4">Payment Summary</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Visa Application Fee</span>
                  <span className="text-gray-900">${fees.application.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="text-gray-900">${fees.processing.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Service Fee</span>
                  <span className="text-gray-900">${fees.service.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-3">
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-900">Total Amount</span>
                    <span className="text-gray-900">${fees.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
