import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js'
import { useQuery } from '@tanstack/react-query'
import { useAnchor } from "@/core/lib/anchor";

export const useBalance = (walletAddress: string | undefined) => {
  const program = useAnchor()

  return useQuery({
    queryKey: ['SOL-BALANCE', { walletAddress }],
    queryFn: async () => {
      if (walletAddress == null) {
        console.log('walletAddress is null')

        return 0
      }

      const balanceInLamports = await program.provider.connection.getBalance(
        new PublicKey(walletAddress),
      )

      return balanceInLamports / LAMPORTS_PER_SOL
    },
  })
}
