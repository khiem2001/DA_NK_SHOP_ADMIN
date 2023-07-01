import { usePrintOrderMutation } from '@/graphql/generated';
import { graphqlClientRequest } from '@/graphql/services/graphql-client';
import { showErrorMessage } from '@/utils/error';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useCallback } from 'react';

const usePrintOrder = () => {
  const { mutate: printOrder, isLoading: printOrderLoading } = usePrintOrderMutation(graphqlClientRequest(true), {
    onSuccess: data => {
      if (data.printOrder) {
        const path = (process.env.NEXT_PUBLIC_MEDIA_ENDPOINT || '') + data.printOrder.pdfPath;
        window.open(path, '_blank', 'toolbar=0,scrollbars=yes,resizable=yes');
      }
    },
    onError: error => {
      showErrorMessage(error);
    }
  });
  const handlePrintOrder = useCallback(
    (orderId: string) => {
      return printOrder({
        input: {
          orderId
        }
      });
    },
    [printOrder]
  );

  return { handlePrintOrder, printOrderLoading };
};
export default usePrintOrder;
