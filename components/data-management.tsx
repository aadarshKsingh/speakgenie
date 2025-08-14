"use client";
import { Card, CardHeader, CardBody, Button } from "@heroui/react";
import { Download, Database, FileText, BarChart3, Shield } from "lucide-react";

export function DataManagement() {
  const handleExport = (type: string) => {
    // Handle data export
    console.log(`Exporting ${type} data...`);
  };

  const handleBackup = () => {
    // Handle backup creation
    console.log("Creating backup...");
  };

  return (
    <Card className="bg-white shadow-xl rounded-xl p-5">
      <CardHeader>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Data Management</h3>
          <p className="text-sm text-gray-600">
            Export data and manage system backups
          </p>
        </div>
      </CardHeader>
      <CardBody className="space-y-6">
        {/* Export Data Section */}
        <div>
          <h4 className="font-medium text-gray-900 mb-3">Export Data</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Button
              variant="bordered"
              startContent={<Database className="h-4 w-4" />}
              onPress={() => handleExport("student")}
              className="justify-start"
            >
              Export Student Data
            </Button>
            <Button
              variant="bordered"
              startContent={<FileText className="h-4 w-4" />}
              onPress={() => handleExport("reports")}
              className="justify-start"
            >
              Export School Reports
            </Button>
            <Button
              variant="bordered"
              startContent={<BarChart3 className="h-4 w-4" />}
              onPress={() => handleExport("analytics")}
              className="justify-start"
            >
              Export Analytics
            </Button>
          </div>
        </div>

        {/* Backup Section */}
        <div className="border-t border-gray-100 pt-6">
          <h4 className="font-medium text-gray-900 mb-3">Backup</h4>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-full">
                <Shield className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-900">System Backup</p>
                <p className="text-sm text-gray-600">
                  Last backup: March 15, 2024
                </p>
              </div>
            </div>
            <Button
              className="bg-blue-700 bg-opacity-70 text-white"
              startContent={<Download className="h-4 w-4" />}
              onPress={handleBackup}
            >
              Create Backup
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
