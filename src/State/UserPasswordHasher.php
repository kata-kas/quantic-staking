<?php

namespace App\State;

use ApiPlatform\Metadata\Operation;
use ApiPlatform\State\ProcessorInterface;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserPasswordHasher implements ProcessorInterface
{
    public function __construct(private ProcessorInterface $decorated, private UserPasswordHasherInterface $passwordHasher){}

    public function process(mixed $data, Operation $operation, array $uriVariables = [], array $context = [])
    {
        if (!$data->getPassword()) {
            return $this->decorated->process($data, $operation, $uriVariables, $context);
        }

        $hashedPassword = $this->passwordHasher->hashPassword(
            $data,
            $data->getPassword()
        );
        $data->setPassword($hashedPassword);
        $data->eraseCredentials();

        return $this->decorated->process($data, $operation, $uriVariables, $context);
    }
}
