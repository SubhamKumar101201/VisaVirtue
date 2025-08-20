import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { FileText, Clock, CheckCircle, XCircle, Search, Plus } from "lucide-react";
import { useState } from "react";

export default function Tracking() {
  const [searchQuery, setSearchQuery] = useState("");

  const { data: applications, isLoading } = useQuery({
    queryKey: ['/api/applications'],
    queryFn: async () => {
      const response = await fetch('/api/applications?userId=default-user');
      if (!response.ok) throw new Error('Failed to fetch applications');
      return response.json();
    }
  });

  const filteredApplications = applications?.filter((app: any) =>
    app.applicationNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.destinationCountry.toLowerCase().includes(searchQuery.toLowerCase()) ||
    app.visaType.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="h-4 w-4" />;
      case 'under_review':
        return <Clock className="h-4 w-4" />;
      case 'rejected':
        return <XCircle className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-secondary/10 text-secondary';
      case 'under_review':
        return 'bg-accent/10 text-accent';
      case 'rejected':
        return 'bg-error/10 text-error';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved';
      case 'under_review':
        return 'Under Review';
      case 'rejected':
        return 'Rejected';
      case 'submitted':
        return 'Submitted';
      default:
        return 'Draft';
    }
  };

  if (isLoading) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Card>
            <CardContent className="p-6">
              <div className="animate-pulse space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-20 bg-gray-200 rounded"></div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Tracking</h1>
          <p className="text-gray-600">Monitor the status of all your visa applications</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search applications..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Link href="/application">
                <Button className="bg-primary hover:bg-primary-dark text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  New Application
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Applications List */}
        <Card>
          <CardHeader>
            <CardTitle>Your Applications</CardTitle>
            <CardDescription>
              {filteredApplications.length} application{filteredApplications.length !== 1 ? 's' : ''} found
            </CardDescription>
          </CardHeader>
          <CardContent>
            {filteredApplications.length > 0 ? (
              <div className="space-y-4">
                {filteredApplications.map((app: any) => (
                  <div key={app.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-sm transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <FileText className="text-primary h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{app.applicationNumber}</h3>
                          <p className="text-sm text-gray-600">{app.destinationCountry} - {app.visaType}</p>
                        </div>
                      </div>
                      <Badge className={`${getStatusColor(app.status)} flex items-center space-x-1`}>
                        {getStatusIcon(app.status)}
                        <span>{getStatusText(app.status)}</span>
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-500">Applicant:</span>
                        <p className="font-medium">{app.firstName} {app.lastName}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Travel Date:</span>
                        <p className="font-medium">{app.departureDate}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Submitted:</span>
                        <p className="font-medium">
                          {app.submittedAt ? new Date(app.submittedAt).toLocaleDateString() : 'Not submitted'}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        Step {app.currentStep} of 5 • {app.visitPurpose || 'No purpose specified'}
                      </div>
                      <div className="space-x-2">
                        <Link href={`/application/${app.id}`}>
                          <Button variant="outline" size="sm">
                            {app.status === 'draft' ? 'Continue' : 'View Details'}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  {searchQuery ? 'No matching applications' : 'No applications yet'}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchQuery 
                    ? 'Try adjusting your search criteria'
                    : 'Get started by creating your first visa application.'
                  }
                </p>
                {!searchQuery && (
                  <div className="mt-6">
                    <Link href="/application">
                      <Button className="bg-primary hover:bg-primary-dark text-white">
                        <Plus className="mr-2 h-4 w-4" />
                        New Application
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
