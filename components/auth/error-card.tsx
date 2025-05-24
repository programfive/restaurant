import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

import { CardWrapper } from "@/components/auth/card-wrapper";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerTitle="Error"
      headerLabel="¡Ups! ¡Algo salió mal!"
      backButtonHref="/auth/login"
      backButtonLabel="Volver al inicio de sesión"
    >
      <div className="w-full flex justify-center items-center">
      <ExclamationTriangleIcon className="text-destructive" />
      </div>
    </CardWrapper>
  );
};
