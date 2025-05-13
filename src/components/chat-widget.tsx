'use client'

import type React from 'react'

import { useState } from 'react'
import { MessageSquare, X, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { useChat } from '@ai-sdk/react'
import { generateId, UIMessage } from 'ai'

import { marked } from 'marked'
import parse from 'html-react-parser'
import { cn } from '@/lib/utils'

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    api: '/api/customer-service',
    initialMessages: [
      {
        id: 'welcome-message',
        role: 'assistant',
        content:
          "👋 Hi there! I'm Digitspot's IT Solutions Assistant. How can I help with your technology needs today?",
      },
    ],
  })

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const needsHumanSupport = (message: string) => {
    const complexPatterns = [
      'speak to a human',
      'talk to a representative',
      'real person',
      'customer service',
      'pricing',
      'quote',
      'contract',
      'emergency',
      'urgent',
      'critical issue',
      'system down',
      'outage',
      'security breach',
      'data loss',
      'migration problem',
      'implementation',
      'consultation',
      'custom solution',
      'specific requirements',
    ]

    return complexPatterns.some((pattern) =>
      message.toLowerCase().includes(pattern)
    )
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (needsHumanSupport(input)) {
      const customEvent = {
        preventDefault: () => {},
        currentTarget: e.currentTarget,
      } as React.FormEvent<HTMLFormElement>
      handleSubmit(customEvent)
      setTimeout(() => {
        const humanSupportMessage: UIMessage = {
          id: generateId(),
          role: 'assistant' as const,
          content:
            'It seems like you need more specialized assistance with your IT needs. Would you like to speak with one of our IT consultants? You can also email support@digitspot.com or call our technical support team at (555) 123-4567 for immediate assistance.',
          parts: [
            {
              type: 'text',
              text: 'It seems like you need more specialized assistance with your IT needs. Would you like to speak with one of our IT consultants? You can also email support@digitspot.com or call our technical support team at (555) 123-4567 for immediate assistance.',
            },
          ],
        }

        messages.push(humanSupportMessage)
      }, 1000)

      return
    }

    handleSubmit(e)
  }

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <Button
        onClick={toggleChat}
        className={cn(
          'h-14 w-14 rounded-full shadow-lg',
          isOpen ? 'bg-gray-700' : 'bg-primary'
        )}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </Button>
      {isOpen && (
        <div className="absolute right-0 bottom-20 flex h-[700px] w-80 flex-col rounded-lg border border-gray-200 bg-white shadow-xl sm:w-96 md:w-[400px] dark:border-gray-800 dark:bg-gray-900">
          {/* Chat Header */}
          <div className="flex items-center border-b border-gray-200 p-4 dark:border-gray-800">
            <Avatar className="mr-2 h-8 w-8">
              <div className="bg-primary flex h-full w-full items-center justify-center rounded-full text-white">
                D
              </div>
            </Avatar>
            <div>
              <h3 className="text-sm font-medium">Digitspot IT Support</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Transforming businesses with innovative IT solutions
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto"
              onClick={toggleChat}
              aria-label="Close chat"
            >
              <X size={18} />
            </Button>
          </div>

          {/* Chat Messages */}
          <div className="scroll-hidden flex-1 space-y-4 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                <div
                  className={cn(
                    'max-w-[80%] rounded-lg p-3',
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800'
                  )}
                >
                  {parse(marked.parse(message.content) as string)}
                </div>
              </div>
            ))}
            {status === 'submitted' && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg bg-gray-100 p-3 dark:bg-gray-800">
                  <div className="flex space-x-2">
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: '0ms' }}
                    />
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: '150ms' }}
                    />
                    <div
                      className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                      style={{ animationDelay: '300ms' }}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Chat Input */}
          <form
            onSubmit={handleFormSubmit}
            className="border-t border-gray-200 p-4 dark:border-gray-800"
          >
            <div className="flex items-center">
              <Input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about our IT solutions..."
                className="mr-2 flex-1"
              />
              <Button
                type="submit"
                size="icon"
                disabled={status === 'submitted' || !input.trim()}
                className="bg-primary hover:bg-primary/90"
              >
                <Send size={18} />
              </Button>
            </div>
            <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Ask about cloud computing, IT outsourcing, network monitoring,
              infrastructure design, business applications, or cybersecurity.
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
