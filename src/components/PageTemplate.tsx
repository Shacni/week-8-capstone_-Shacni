
import { ReactNode } from "react";

interface PageTemplateProps {
  title: string;
  description?: string;
  children?: ReactNode;
  actions?: ReactNode;
}

const PageTemplate = ({ title, description, children, actions }: PageTemplateProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{title}</h1>
          {description && (
            <p className="text-gray-600 mt-2">{description}</p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-3">
            {actions}
          </div>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border p-6 min-h-96">
        {children || (
          <div className="flex items-center justify-center h-64 text-gray-500">
            <div className="text-center">
              <div className="text-4xl mb-4">🏥</div>
              <p className="text-lg">This page is ready for your content</p>
              <p className="text-sm mt-2">Start building your {title.toLowerCase()} features here</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;
