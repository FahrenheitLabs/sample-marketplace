import { FC } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { HiX } from 'react-icons/hi'

const InfoModal: FC = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="reservoir-body hidden hover:underline sm:grid">
          What is reservoir.market?
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay>
          <Dialog.Content className="fixed inset-0 bg-[#000000b6]">
            <div className="fixed top-1/2 left-1/2 max-w-prose -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-8 shadow-md ">
              <div className="space-y-3">
                <section>
                  <div className="reservoir-h4 mb-3 flex justify-between">
                    <p>What is reservoir.market?</p>
                    <Dialog.Close className="btn-primary-outline p-1.5">
                      <HiX className="h-5 w-5" />
                    </Dialog.Close>
                  </div>
                  <p className="reservoir-body mb-1">
                    Reservoir.market is a demo marketplace designed to show how
                    simple it is to build on top of Reservoir, a web3-native
                    order book protocol.
                  </p>
                </section>
                <section className="reservoir-body">
                  <div className="reservoir-h6 mb-2 block">
                    It supports 3 modes:
                  </div>
                  <ul>
                    <li>
                      Single collection community:{' '}
                      <Link href="https://cryptocoven.reservoir.market/">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          cryptocoven.reservoir.market
                        </a>
                      </Link>
                    </li>
                    <li>
                      Multi collection community:{' '}
                      <Link href="https://bayc.reservoir.market/">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          bayc.reservoir.market
                        </a>
                      </Link>
                    </li>
                    <li>
                      All collections:{' '}
                      <Link href="https://www.reservoir.market/">
                        <a
                          className="underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          www.reservoir.market
                        </a>
                      </Link>
                    </li>
                  </ul>
                </section>

                <section>
                  <p>
                    It comes with all the functionality you expect (browsing,
                    listing, buying, etc), as well as powerful new features like
                    trait exploration and bidding.
                  </p>
                </section>
                <section>
                  <p>
                    It&apos;s open-source, and{' '}
                    <Link href="https://github.com/reservoirprotocol/sample-marketplace">
                      <a
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        ready to be forked
                      </a>
                    </Link>
                    . Just add lore.
                  </p>
                </section>
                <section>
                  <p>
                    Learn more about{' '}
                    <Link href="https://reservoirprotocol.github.io/">
                      <a
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        our project
                      </a>
                    </Link>
                    .
                  </p>
                </section>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

export default InfoModal
