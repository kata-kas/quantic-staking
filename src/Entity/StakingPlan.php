<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Repository\StakingPlanRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: StakingPlanRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['stakingPlans:read']],
    denormalizationContext: ['groups' => ['stakingPlans:write']],
    operations: [
        new Get(),
        new Patch(),
        new Post(),
        new GetCollection()
    ]
)]
class StakingPlan
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['stakingPlans:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['stakingPlans:read', 'stakingPlans:write'])]
    private ?string $status = null;

    #[ORM\Column(type: Types::JSON)]
    #[Groups(['stakingPlans:read', 'stakingPlans:write'])]
    private array $durations = [];

    #[ORM\ManyToOne]
    #[ORM\JoinColumn(nullable: false)]
    #[Groups(['stakingPlans:read', 'stakingPlans:write', 'requests:read'])]
    private ?Currency $currency = null;

    #[ORM\Column(type: Types::JSON)] 
    #[Groups(['stakingPlans:read', 'stakingPlans:write'])]
    private array $networks = [];

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getDurations(): array
    {
        return $this->durations;
    }

    public function setDurations(array $durations): self
    {
        $this->durations = $durations;

        return $this;
    }

    public function getCurrency(): ?Currency
    {
        return $this->currency;
    }

    public function setCurrency(?Currency $currency): self
    {
        $this->currency = $currency;

        return $this;
    }

    public function getNetworks(): array
    {
        return $this->networks;
    }

    public function setNetworks(array $networks): self
    {
        $this->networks = $networks;

        return $this;
    }
}
