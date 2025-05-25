"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  User,
  Mail,
  Phone,
  Calendar,
  Edit3,
  Save,
  X,
  Camera,
  Crown,
  UserCheck,
  BadgeIcon as IdCard,
  Cake,
  FileText,
  ShoppingCart,
  Clock,
  CheckCircle,
  XCircle,
  Palette,
  Bell,
  Eye,
  Shield,
  TrendingUp,
  Settings,
} from "lucide-react"

type UserRole = "administrador" | "vendedor"
type UserStatus = "activo" | "inactivo"

interface UserData {
  name: string
  email: string
  phone: string
  role: UserRole
  status: UserStatus
  createdAt: string
  updatedAt: string
  documentId: string
  birthDate: string
  theme: "dark" | "light"
  description: string
  salesCount: number
  monthlySales: number
  notifications: boolean
  profileVisible: boolean
  twoFactorAuth: boolean
}

export  function SimpleUserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState<UserData>({
    name: "Carlos Mendoza",
    email: "carlos.mendoza@empresa.com",
    phone: "+34 612 345 678",
    role: "vendedor",
    status: "activo",
    createdAt: "2024-01-15",
    updatedAt: "2024-12-20",
    documentId: "12345678A",
    birthDate: "1990-05-15",
    theme: "dark",
    description: "Vendedor especializado en soluciones empresariales con experiencia en el sector tecnológico.",
    salesCount: 127,
    monthlySales: 23,
    notifications: true,
    profileVisible: true,
    twoFactorAuth: false,
  })

  const handleSave = () => {
    setFormData({ ...formData, updatedAt: new Date().toISOString().split("T")[0] })
    setIsEditing(false)
    // Aquí iría la lógica para guardar los datos
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Aquí podrías revertir los cambios si es necesario
  }

  const getRoleBadge = (role: UserRole) => {
    if (role === "administrador") {
      return (
        <Badge variant="default" className="gap-1 bg-purple-600">
          <Crown className="w-3 h-3" />
          Administrador
        </Badge>
      )
    }
    return (
      <Badge variant="secondary" className="gap-1">
        <UserCheck className="w-3 h-3" />
        Vendedor
      </Badge>
    )
  }

  const getStatusBadge = (status: UserStatus) => {
    if (status === "activo") {
      return (
        <Badge variant="default" className="gap-1 bg-green-600">
          <CheckCircle className="w-3 h-3" />
          Activo
        </Badge>
      )
    }
    return (
      <Badge variant="destructive" className="gap-1">
        <XCircle className="w-3 h-3" />
        Inactivo
      </Badge>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {/* Header del perfil */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="relative">
                <Avatar className="w-24 h-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt={formData.name} />
                  <AvatarFallback className="text-2xl">
                    {formData.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <Button size="icon" variant="outline" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full">
                  <Camera className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-2xl font-bold">{formData.name}</h1>
                  {getRoleBadge(formData.role)}
                  {getStatusBadge(formData.status)}
                </div>
                <p className="text-muted-foreground">{formData.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <ShoppingCart className="w-4 h-4" />
                    {formData.salesCount} ventas totales
                  </div>
                  <div className="flex items-center gap-1">
                    <TrendingUp className="w-4 h-4" />
                    {formData.monthlySales} ventas este mes
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Creado: {new Date(formData.createdAt).toLocaleDateString("es-ES")}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    Actualizado: {new Date(formData.updatedAt).toLocaleDateString("es-ES")}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                {!isEditing ? (
                  <Button onClick={() => setIsEditing(true)} className="gap-2">
                    <Edit3 className="w-4 h-4" />
                    Editar perfil
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button onClick={handleSave} className="gap-2">
                      <Save className="w-4 h-4" />
                      Guardar
                    </Button>
                    <Button variant="outline" onClick={handleCancel} className="gap-2">
                      <X className="w-4 h-4" />
                      Cancelar
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Información del usuario */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Información del usuario
                </CardTitle>
                <CardDescription>Datos personales y del sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Información básica */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Datos personales</h3>

                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Nombre completo *
                      </Label>
                      {isEditing ? (
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground">{formData.name}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        Email *
                      </Label>
                      {isEditing ? (
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground">{formData.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Teléfono (opcional)
                      </Label>
                      {isEditing ? (
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground">{formData.phone || "No especificado"}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="documentId" className="flex items-center gap-2">
                        <IdCard className="w-4 h-4" />
                        Documento de identidad *
                      </Label>
                      {isEditing ? (
                        <Input
                          id="documentId"
                          value={formData.documentId}
                          onChange={(e) => setFormData({ ...formData, documentId: e.target.value })}
                          required
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground">{formData.documentId}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="birthDate" className="flex items-center gap-2">
                        <Cake className="w-4 h-4" />
                        Fecha de nacimiento (opcional)
                      </Label>
                      {isEditing ? (
                        <Input
                          id="birthDate"
                          type="date"
                          value={formData.birthDate}
                          onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {formData.birthDate
                            ? new Date(formData.birthDate).toLocaleDateString("es-ES")
                            : "No especificado"}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Configuración del sistema */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Sistema</h3>

                    <div className="space-y-2">
                      <Label htmlFor="role" className="flex items-center gap-2">
                        <Crown className="w-4 h-4" />
                        Rol *
                      </Label>
                      {isEditing ? (
                        <Select
                          value={formData.role}
                          onValueChange={(value: UserRole) => setFormData({ ...formData, role: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="vendedor">Vendedor</SelectItem>
                            <SelectItem value="administrador">Administrador</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <p className="text-sm text-muted-foreground capitalize">{formData.role}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="status" className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4" />
                        Estado *
                      </Label>
                      {isEditing ? (
                        <Select
                          value={formData.status}
                          onValueChange={(value: UserStatus) => setFormData({ ...formData, status: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="activo">Activo</SelectItem>
                            <SelectItem value="inactivo">Inactivo</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <p className="text-sm text-muted-foreground capitalize">{formData.status}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="theme" className="flex items-center gap-2">
                        <Palette className="w-4 h-4" />
                        Tema
                      </Label>
                      {isEditing ? (
                        <Select
                          value={formData.theme}
                          onValueChange={(value: "dark" | "light") => setFormData({ ...formData, theme: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dark">Oscuro</SelectItem>
                            <SelectItem value="light">Claro</SelectItem>
                          </SelectContent>
                        </Select>
                      ) : (
                        <p className="text-sm text-muted-foreground">
                          {formData.theme === "dark" ? "Oscuro" : "Claro"}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Fecha de creación
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {new Date(formData.createdAt).toLocaleDateString("es-ES")}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        Última modificación
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        {new Date(formData.updatedAt).toLocaleDateString("es-ES")}
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Ventas */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Información de ventas</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="salesCount" className="flex items-center gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Cantidad de ventas totales
                      </Label>
                      {isEditing ? (
                        <Input
                          id="salesCount"
                          type="number"
                          min="0"
                          value={formData.salesCount}
                          onChange={(e) =>
                            setFormData({ ...formData, salesCount: Number.parseInt(e.target.value) || 0 })
                          }
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground">{formData.salesCount}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="monthlySales" className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        Ventas del mes
                      </Label>
                      {isEditing ? (
                        <Input
                          id="monthlySales"
                          type="number"
                          min="0"
                          value={formData.monthlySales}
                          onChange={(e) =>
                            setFormData({ ...formData, monthlySales: Number.parseInt(e.target.value) || 0 })
                          }
                        />
                      ) : (
                        <p className="text-sm text-muted-foreground">{formData.monthlySales}</p>
                      )}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="description" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Descripción
                  </Label>
                  {isEditing ? (
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={3}
                      placeholder="Describe la experiencia y especialización del usuario..."
                    />
                  ) : (
                    <p className="text-sm text-muted-foreground">{formData.description}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Panel de configuración */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Configuración
                </CardTitle>
                <CardDescription>Preferencias y seguridad</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Bell className="w-4 h-4" />
                      <div>
                        <span className="text-sm font-medium">Notificaciones</span>
                        <p className="text-xs text-muted-foreground">Recibir alertas del sistema</p>
                      </div>
                    </div>
                    <Switch
                      checked={formData.notifications}
                      onCheckedChange={(checked) => setFormData({ ...formData, notifications: checked })}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <div>
                        <span className="text-sm font-medium">Perfil visible</span>
                        <p className="text-xs text-muted-foreground">Mostrar perfil a otros usuarios</p>
                      </div>
                    </div>
                    <Switch
                      checked={formData.profileVisible}
                      onCheckedChange={(checked) => setFormData({ ...formData, profileVisible: checked })}
                    />
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <div>
                        <span className="text-sm font-medium">Autenticación 2FA</span>
                        <p className="text-xs text-muted-foreground">Seguridad adicional</p>
                      </div>
                    </div>
                    <Switch
                      checked={formData.twoFactorAuth}
                      onCheckedChange={(checked) => setFormData({ ...formData, twoFactorAuth: checked })}
                    />
                  </div>
                </div>

                {formData.twoFactorAuth && (
                  <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="flex items-center gap-2 text-green-700 dark:text-green-300">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm font-medium">2FA Activado</span>
                    </div>
                    <p className="text-xs text-green-600 dark:text-green-400 mt-1">
                      Tu cuenta está protegida con autenticación de dos factores
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
