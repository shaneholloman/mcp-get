export interface Package {
    name: string;
    description: string;
    runtime: 'node' | 'python';
    vendor: string;
    sourceUrl: string;
    homepage: string;
    license: string;
    environmentVariables?: {
        [key: string]: {
            description: string;
            required: boolean;
            argName?: string;
        }
    };
}

export interface ResolvedPackage extends Package {
    isInstalled: boolean;
    isVerified: boolean;
}

export interface PackageHelper {
    requiredEnvVars?: {
        [key: string]: {
            description: string;
            required: boolean;
            argName?: string;
        }
    };
    configureEnv?: (config: any) => Promise<void>;
    runtime?: 'node' | 'python';
}

export interface PackageHelpers {
    [packageName: string]: PackageHelper;
} 